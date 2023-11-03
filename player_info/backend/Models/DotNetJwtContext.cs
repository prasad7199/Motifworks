using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Player_Info.Models;

public partial class DotNetJwtContext : DbContext
{
    public DotNetJwtContext()
    {
    }

    public DotNetJwtContext(DbContextOptions<DotNetJwtContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Player> Players { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("Server=(LocalDB)\\MSSQLLocalDB;Database=DotNetJWT;Trusted_Connection=true;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Player>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Player__3214EC07BBACA0E7");

            entity.ToTable("Player");

            entity.Property(e => e.Age).HasColumnName("age");
            entity.Property(e => e.Debut)
                .HasColumnType("date")
                .HasColumnName("debut");
            entity.Property(e => e.HighestScore).HasColumnName("highest_score");
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("name");
            entity.Property(e => e.OdiRuns).HasColumnName("odi_runs");
            entity.Property(e => e.T20Runs).HasColumnName("t20_runs");
            entity.Property(e => e.TestRuns).HasColumnName("test_runs");
            entity.Property(e => e.Wickets).HasColumnName("wickets");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__User__3214EC07FEF31FC3");

            entity.ToTable("User");

            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("name");
            entity.Property(e => e.Password)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("password");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
