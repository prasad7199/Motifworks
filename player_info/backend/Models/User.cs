using System;
using System.Collections.Generic;

namespace Player_Info.Models;

public partial class User
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public string? Password { get; set; }
}
