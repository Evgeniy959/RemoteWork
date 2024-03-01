using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace WebApplication1.Models.Configurations
{
    public class OrderProductConfiguration : IEntityTypeConfiguration<OrderProduct>
    {
        public void Configure(EntityTypeBuilder<OrderProduct> builder)
        {
            builder
                .HasOne(pt => pt.Order)
                .WithMany(p => p.OrderProducts)
                .HasForeignKey(p => p.OrderId);

            builder
                .HasOne(pt => pt.Product)
                .WithMany(t => t.OrderProducts)
                .HasForeignKey(pt => pt.ProductId);
        }
    }
}
