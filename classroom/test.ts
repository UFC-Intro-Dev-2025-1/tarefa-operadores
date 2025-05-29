import { execSync } from 'child_process';

let passed = 0;
const total = 4;

console.log(
    '\n\n---------------------------\n\n🔍 Iniciando verificação da atividade...\n'
);

// Teste 1: Verifica o main.ts
try {
    // testa primeiro se roda
    const output = execSync('npm run build').toString();
    // Aceita qualquer saída. Apenas verifica se houve alguma saída, não importa o conteúdo
    if (output.toString().trim().length > 0) {
        passed++;
        console.log('✅ main.ts: O código executou e produziu alguma saída.');
    } else {
        console.log(
            '❌ main.ts: O código executou, mas não produziu nenhuma saída.'
        );
    }
} catch (e) {
    console.log('❌ main.ts: Erro: ' + e.message);
}

// Teste 2: Verifica o extra1.ts
try {
    // testa primeiro se roda
    const saidaEsperadaExtra1 =
        'Arredondado para baixo:  5\n' +
        'Arredondado para cima:  6\n' +
        'Arredondado (padrão):  6';

    const output = execSync('npx tsx src/extra1.ts').toString();
    if (output.toString().includes(saidaEsperadaExtra1)) {
        passed++;
        console.log('✅ extra1.ts: Saída em texto do código é a esperada.');
    } else {
        console.log('❌ extra1.ts: Saída em texto do código não é a esperada.');
    }
} catch (e) {
    console.log('❌ extra1.ts: Erro: ' + e.message);
}

// Teste 3: Verifica o extra2.ts
try {
    // testa primeiro se roda
    const saidaEsperadaExtra2 =
        'Peso de Ana é maior que o de João? true\n' +
        'Altura de Maria é igual à de Carla? true\n' +
        'Senha digitada corresponde à senha cadastrada? false';

    const output = execSync('npx tsx src/extra2.ts').toString();
    if (output.toString().includes(saidaEsperadaExtra2)) {
        passed++;
        console.log('✅ extra2.ts: Saída em texto do código é a esperada.');
    } else {
        console.log('❌ extra2.ts: Saída em texto do código não é a esperada.');
    }
} catch (e) {
    console.log('❌ extra2.ts: Erro: ' + e.message);
}

// Teste 4: Verifica o extra3.ts
try {
    // testa primeiro se roda
    const saidaEsperadaExtra3 = 'O resultado é: 3';
    const output = execSync('npx tsx src/extra3.ts').toString();
    if (output.toString().includes(saidaEsperadaExtra3)) {
        passed++;
        console.log('✅ extra3.ts: Saída em texto do código é a esperada.');
    } else {
        console.log('❌ extra3.ts: Saída em texto do código não é a esperada.');
    }
} catch (e) {
    console.log('❌ extra3.ts: Erro: ' + e.message);
}

// Resultado final
console.log(
    `\n\n🎯 Resultado: ${passed}/${total} testes passaram.` +
        '\n\n---------------------------\n\n'
);

// Código de saída para GitHub Classroom
process.exit(passed === total ? 0 : 1);
