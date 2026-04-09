namespace Appo.Backend.Models;

public class Workload
{
    public string Id { get; set; } = default!;
    public string Name { get; set; } = default!;
    public string Customer { get; set; } = default!;
    public string PecStatus { get; set; } = default!; // e.g. "Eligible", "Not Eligible", "Partial"
    public string Issue { get; set; } = default!;
    public string Recommendation { get; set; } = default!;
    public decimal EstimatedUplift { get; set; }
}
