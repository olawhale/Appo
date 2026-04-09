namespace APPO.Backend.Models;

public class Recommendation
{
    public string WorkloadId { get; set; } = default!;
    public string Title { get; set; } = default!;
    public string Detail { get; set; } = default!;
    public decimal EstimatedUplift { get; set; }
}

