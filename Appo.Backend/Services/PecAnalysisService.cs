using Appo.Backend.Models;

namespace Appo.Backend.Services;

public class PecAnalysisService
{
    // In real life, inject Azure clients + config
    public PecSummary GetPecSummary()
    {
        return new PecSummary
        {
            CurrentPec = 54300m,
            MissedPec = 12400m,
            UpliftPotential = 18700m,
            PecScore = 68
        };
    }

    public IEnumerable<Workload> GetWorkloads()
    {
        return new List<Workload>
        {
            new()
            {
                Id = "w1",
                Name = "Web App Cluster",
                Customer = "Client A",
                PecStatus = "Not Eligible",
                Issue = "Legacy VM SKU",
                Recommendation = "Upgrade to B-Series VM",
                EstimatedUplift = 3200m
            },
            new()
            {
                Id = "w2",
                Name = "Data Lake Storage",
                Customer = "Client A",
                PecStatus = "Partial",
                Issue = "Cold tier for hot data",
                Recommendation = "Move to Hot Tier",
                EstimatedUplift = 2100m
            }
        };
    }

    public IEnumerable<(DateTime Date, decimal Value)> GetPecForecast()
    {
        var start = DateTime.UtcNow.Date;
        return Enumerable.Range(0, 6)
            .Select(i => (start.AddMonths(i), 54000m + i * 1500m));
    }
}

