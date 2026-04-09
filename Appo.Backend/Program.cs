using Appo.Backend.Models;
using Appo.Backend.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSingleton<PecAnalysisService>();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

app.UseCors();
app.UseSwagger();
app.UseSwaggerUI();

app.MapGet("/api/pec/summary", (PecAnalysisService service) =>
{
    var summary = service.GetPecSummary();
    return Results.Ok(summary);
});

app.MapGet("/api/pec/workloads", (PecAnalysisService service) =>
{
    var workloads = service.GetWorkloads();
    return Results.Ok(workloads);
});

app.MapGet("/api/pec/forecast", (PecAnalysisService service) =>
{
    var forecast = service.GetPecForecast()
        .Select(p => new { date = p.Date, value = p.Value });
    return Results.Ok(forecast);
});

app.Run();


Run with:

dotnet run
