using PatternBuilder;

Person person = new Person();
//person.SetSurname("Abdullayev");
//person.SetSalary(1000);
//person.SetPhone("+994519999902");
//person.SetName("Farid");
//person.SetAge(27);
//person.SetId(1);




person.SetSurname("Abdullayev")
      .SetSalary(1000)
//      .SetPhone("+994519999902")
      .SetName("Farid")
//      .SetAge(27)
      .SetId(1);


Console.WriteLine(person);

