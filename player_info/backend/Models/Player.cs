using System;
using System.Collections.Generic;

namespace Player_Info.Models;

public partial class Player
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public int? Age { get; set; }

    public int? T20Runs { get; set; }

    public int? OdiRuns { get; set; }

    public int? TestRuns { get; set; }

    public int? Wickets { get; set; }

    public int? HighestScore { get; set; }

    public DateTime? Debut { get; set; }
}
