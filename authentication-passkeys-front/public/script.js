document.getElementById("create-passkey").addEventListener("click", async function() {
    try {
        const publicKeyCredentialCreationOptions = {
            challenge: new Uint8Array(32), // Deve ser gerado pelo backend
            rp: { name: "Elo Authentication", id: "passkeys-authentication.web.app" },
            user: {
                id: new Uint8Array(16), // ID do usuário único
                name: "email@exemplo.com",
                displayName: "Usuário Exemplo"
            },
            pubKeyCredParams: [{ type: "public-key", alg: -7 }], // ECDSA P-256
            authenticatorSelection: { authenticatorAttachment: "platform" },
            timeout: 60000
        };

        const credential = await navigator.credentials.create({ publicKey: publicKeyCredentialCreationOptions });
        console.log("Passkey criada:", credential);
        alert("Passkey criada com sucesso!");
    } catch (error) {
        console.error("Erro ao criar a Passkey:", error);
        alert("Erro ao criar a Passkey. Verifique o console para mais detalhes.");
    }
});
