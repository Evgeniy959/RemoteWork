using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PatternBuilder
{
    public class Person
    {
        private int id;
        private string name;
        private string surname;
        private int salary;
        private string phone;
        private int age;

        public Person()
        {

        }

        public Person(int id, string name, string surname, int salary, string phone, int age)
        {
            this.id = id;
            this.name = name;
            this.surname = surname;
            this.salary = salary;
            this.phone = phone;
            this.age = age;
        }

        public int GetId()
        {
            return id;
        }

        public Person SetId(int value)
        {
            id = value;
            return this;
        }

        public int GetAge()
        {
            return age;
        }

        public Person SetAge(int value)
        {
            age = value;
            return this;
        }

        public int GetSalary()
        {
            return salary;
        }

        public Person SetSalary(int value)
        {
            salary = value;
            return this;
        }

        public string GetName()
        {
            return name;
        }

        public Person SetName(string value)
        {
            name = value;
            return this;
        }

        public string GetSurname()
        {
            return surname;
        }

        public Person SetSurname(string value)
        {
            surname = value;
            return this;
        }

        public string GetPhone()
        {
            return phone;
        }

        public Person SetPhone(string value)
        {
            phone = value;
            return this;
        }

        public override string? ToString()
        {
            return name+" " +surname+ " " +age+ " " +phone+" "+salary+" " + id;
        }
    }
}
