using Microsoft.AspNetCore.Mvc;
using OpaAgenda.Backend.Models;

namespace OpaAgenda.Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AgendamentoController : ControllerBase
    {
        private static List<Agendamento> _agendamentos = new List<Agendamento>(); // teste em memória

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_agendamentos);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var agendamento = _agendamentos.FirstOrDefault(a => a.Id == id);
            if (agendamento == null) return NotFound();
            return Ok(agendamento);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Agendamento agendamento)
        {
            agendamento.Id = _agendamentos.Count > 0 ? _agendamentos.Max(a => a.Id) + 1 : 1;
            _agendamentos.Add(agendamento);
            return CreatedAtAction(nameof(GetById), new { id = agendamento.Id }, agendamento);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Agendamento agendamento)
        {
            var existing = _agendamentos.FirstOrDefault(a => a.Id == id);
            if (existing == null) return NotFound();

            existing.Nome = agendamento.Nome;
            existing.Data = agendamento.Data;

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var agendamento = _agendamentos.FirstOrDefault(a => a.Id == id);
            if (agendamento == null) return NotFound();

            _agendamentos.Remove(agendamento);
            return NoContent();
        }
    }
}
