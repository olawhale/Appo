using Microsoft.EntityFrameworkCore;
using Appo.Backend.Models;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<Workload> Workloads => Set<Workload>();
}

