namespace OpaAgenda.Backend.Models
{
    public class Agendamento
    {
        public int Id { get; set; }
        public string Nome { get; set; } = null!;
        public DateTime Data { get; set; }
    }
}
