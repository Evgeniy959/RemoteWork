using System.Linq;
using WebApplication1.Models;

namespace WebApplication1.Extension
{
    public static class DbContextExtensions
    {
        public static void UpdateManyToMany<T,Key>(this BlogDbContext db,IEnumerable<T> currentItems, IEnumerable<T> newItems,Func<T,Key> getKey) where T : class
        {
            if (currentItems!=null)
            {
                db.Set<T>().RemoveRange(currentItems.Except(newItems, getKey));
                db.Set<T>().AddRange(newItems.Except(currentItems, getKey));
            }
            else
            {
                db.Set<T>().AddRange(newItems);
            }
        }

        public static IEnumerable<T> Except<T, TKey>(this IEnumerable<T> items, IEnumerable<T> other, Func<T, TKey> getKeyFunc)
        {
            return items
                .GroupJoin(other, getKeyFunc, getKeyFunc, (item, tempItems) => new { item, tempItems })
                .SelectMany(t => t.tempItems.DefaultIfEmpty(), (t, tmp) => new { t, tmp })
                .Where(t => ReferenceEquals(null, t.tmp) || t.tmp.Equals(default(T)))
                .Select(t => t.t.item);

        }

    }
}
