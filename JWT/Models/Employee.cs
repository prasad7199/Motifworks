using System;
using System.Collections.Generic;

namespace JWT_Authentication.Models;

public partial class Employee
{
    public int EmployeeId { get; set; }

    public string? Name { get; set; }

    public int? Age { get; set; }

    public string? Address { get; set; }
}
