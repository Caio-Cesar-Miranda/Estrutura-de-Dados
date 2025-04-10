
import { empilha, desempilha} from "../src/Q8LISTA1";


test("Enchendo a pilha", () => {
    expect(empilha(2));
    expect(empilha(3));
    expect(empilha(1));
    expect(empilha(20)); // uma nova pilha deverá ser criada

})