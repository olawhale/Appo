using Microsoft.EntityFrameworkCore;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) {}
   public DbSet<Workload> Workloads { get; set; }
public DbSet<Recommendation> Recommendations { get; set; }
}
