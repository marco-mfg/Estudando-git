export class DomHandler {
  static atualizarListaPaciente(pacientes) {
    const selectPaciente = document.getElementById("selectPaciente");
    selectPaciente.innerHTML = `<option value="">--Selecione um paciente--</option>`;

    pacientes.forEach((paciente) => {
      const option = document.createElement("option");
      option.value = paciente.nome;
      option.textContent = paciente.nome;
      selectPaciente.appendChild(option);
    });
  }

  static atualizarListaMedico(medicos) {
    const selectMedico = document.getElementById("selectMedico");
    selectMedico.innerHTML = `<option value="">--Selecione um médico--</option>`;

    medicos.forEach((medico) => {
      const option = document.createElement("option");
      option.value = medico.nome;
      option.textContent = medico.nome;
      selectMedico.appendChild(option);
    });
  }

  static exibirConsulta(mensagem) {
    const listaConsultas = document.getElementById('listaConsultas') //ul

    const consultas = Array.from(listaConsultas.getElementsByTagName('li'))
    const consultaExiste = consultas.some((li) => li.textContent.includes(mensagem))

    // {} tem que ter retorno
    // => retorno direto

    if (consultaExiste) {
      alert('Consulta já agendada!')
      return
    }
    
    const li = document.createElement('li');
    li.classList.add('consulta-item')
    li.textContent = mensagem

    const btnCancelar = document.createElement('button')
    btnCancelar.textContent = 'Cancelar'
    btnCancelar.classList.add('btn-cancelar')

    btnCancelar.addEventListener('click', () => {
      li.remove()
    })

    li.appendChild(btnCancelar)
    listaConsultas.appendChild(li)
  }
}

// const handler = new DomHandler;
// DomHandler.atualizarListaMedico
