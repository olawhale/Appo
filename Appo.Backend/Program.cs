using Microsoft.EntityFrameworkCore;
using Appo.Backend.Models;
using Appo.Backend.Data;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
        policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
});

var app = builder.Build();

app.UseCors();
app.UseSwagger();
app.UseSwaggerUI();

app.MapGet("/api/workloads", async (AppDbContext db) =>
{
    var workloads = await db.Workloads.ToListAsync();
    return Results.Ok(workloads);
});

app.MapPost("/api/workloads", async (Workload workload, AppDbContext db) =>
{
    db.Workloads.Add(workload);
    await db.SaveChangesAsync();
    return Results.Created($"/api/workloads/{workload.Id}", workload);
});

app.Run();


Run migrations with:

dotnet ef migrations add InitialCreate
dotnet ef database update
