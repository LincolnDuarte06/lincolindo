const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
    // Insere um usuário
    const novoUsuario = await prisma.usuario.create({
        data: {
        nome: "José Bonifácio",
        email: "jose.bonifacio@imperioptbr.com",
        },
    });

    console.log("novo usuário " + JSON.stringify(novoUsuario));
    
    // Busca usuários
    const usuarios = prisma.usuario.findMany();
    console.log("Todos os usuário " + JSON.stringify(usuarios));
}

main().catch((erro) => {
    console.log("ERRO:" + erro);
});