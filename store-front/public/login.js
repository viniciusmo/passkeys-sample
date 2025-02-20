document.getElementById("login-passkey").addEventListener("click", async function() {
    try {
        const publicKeyCredentialRequestOptions = {
            challenge: new Uint8Array(32), // Deve ser gerado pelo backend
            rpId: "passkeys-authentication.web.app",
            allowCredentials: [],
            timeout: 60000
        };

        const assertion = await navigator.credentials.get({ publicKey: publicKeyCredentialRequestOptions });
        console.log("Passkey utilizada para login:", assertion);
        alert("Autenticado com sucesso!");
    } catch (error) {
        console.error("Erro ao autenticar com a Passkey:", error);
        alert("Erro ao autenticar. Verifique o console para mais detalhes.");
    }
});
