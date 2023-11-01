using System;
using System.Collections.Generic;

namespace JWT_Authentication.Models;

public partial class User
{
    public int UserId { get; set; }

    public string? Name { get; set; }

    public string? Password { get; set; }

   
}
