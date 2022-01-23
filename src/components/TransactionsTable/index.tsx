import { Container } from "./styled";

export function TransactionsTable() {
    return(
        <Container >
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Pj do Caema</td>
                        <td className="deposit">R$:3800.0</td>
                        <td>Entrada</td>
                        <td>16/03/2022</td>
                    </tr>
                    <tr>
                        <td>Pj do Caema</td>
                        <td className="withdraw">-R$:3800.0</td>
                        <td>Entrada</td>
                        <td>16/03/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}