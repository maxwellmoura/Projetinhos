const API_URL = 'https://viacep.com.br/ws';

export async function fetchCEP(cep) {
    try {
        const cleanCEP = cep.replace(/\D/g, '');
        
        if (cleanCEP.length !== 8) {
            throw new Error('CEP deve conter 8 dígitos');
        }
        
        const response = await fetch(`${API_URL}/${cleanCEP}/json`);
        
        if (!response.ok) {
            throw new Error('Erro ao buscar CEP');
        }
        
        const data = await response.json();
        
        if (data.erro) {
            throw new Error('CEP não encontrado');
        }
        
        return data;
    } catch (error) {
        throw error;
    }
}

export async function searchByCEP(cep) {
    return fetchCEP(cep);
}