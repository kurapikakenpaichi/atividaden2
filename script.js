document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('cadastroForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const nome = document.getElementById('nome').value;
        const senha = document.getElementById('senha').value;
        const voucher = document.getElementById('voucher').value.toUpperCase();
        const perfil = document.getElementById('perfil').value;
        const observacao = document.getElementById('observacao').value;
    
        const telefones = [];
        document.querySelectorAll('input[name^="telefone"]').forEach(input => {
            if (input.value.trim() !== '') {
                telefones.push(input.value.trim());
            }
        });
      
        const usuario = {
            nome: nome,
            senha: senha,
            voucher: voucher,
            perfil: perfil,
            observacao: observacao,
            telefones: telefones
        };
        console.log('Usuário cadastrado:', usuario);
        alert('Usuário cadastrado com sucesso!');
       
    });

    document.getElementById('addTelefone').addEventListener('click', function() {
        const telefonesContainer = document.getElementById('telefonesContainer');
        if (telefonesContainer.children.length < 3) {
            const novoTelefone = document.createElement('input');
            novoTelefone.type = 'tel';
            novoTelefone.name = `telefone${telefonesContainer.children.length + 1}`;
            novoTelefone.maxLength = 14;
            novoTelefone.placeholder = `Telefone ${telefonesContainer.children.length + 1} (XX) XXXX-XXXX`;
            telefonesContainer.appendChild(novoTelefone);
        } else {
            alert('Você já adicionou o número máximo de telefones permitidos.');
        }
    });
});

function handlePasswordInput(value) {
    const senhaInput = document.getElementById('senha');
    senhaInput.value = '*'.repeat(value.length);
}
