﻿using System;
using System.Collections.Generic;

namespace api2.Models;

public partial class Table
{
    public int EmployeeId { get; set; }

    public string? Name { get; set; }

    public int? Age { get; set; }

    public string? Address { get; set; }
}