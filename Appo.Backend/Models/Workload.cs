public class Workload
{
    public int Id { get; set; }
    public string Name { get; set; } = default!;
    public string Customer { get; set; } = default!;
    public string PecStatus { get; set; } = default!;
    public string Issue { get; set; } = default!;
    public string Recommendation { get; set; } = default!;
    public decimal EstimatedUplift { get; set; }
}

