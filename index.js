class Produto {
    constructor () {
        this.id = 1;
        this.arrayProdutos= [];
    }
    Adicionar() {
        let produto = this.LerDados() 
        if (this.Validar(produto)== true){
            this.Salvar(produto)
        }
        this.Listar()
    }
    LerDados(){
        let produto = {}
        
        produto.id = this.id
        produto.nomeProduto = document.getElementById('pdnome').value;
        produto.precoProduto = document.getElementById('pdpreco').value;

        return produto
    }
    Validar(produto) {
        let msg = '';

        if (produto.nomeProduto == '') {
            msg += 'Por favor, insira corretamente o nome do produto! \n'
        } 
        if (produto.precoProduto == '') {
            msg += 'Por favor, insira corretamente o preço do produto! \n'
        }
        if (msg != ''){
            alert(msg)
            return false
        }
        return true
    }
    Salvar(produto) {
        this.arrayProdutos.push(produto)
        this.id++;
    }
    Listar(){
        let tbody = document.querySelector(".tbody");
        tbody.innerHTML = '';
        for(let i = 0; i < this.arrayProdutos.length; i++ ) {

            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_preco = tr.insertCell();
            let td_del = tr.insertCell();

            td_id.innerHTML = this.arrayProdutos[i].id;
            td_nome.innerHTML = this.arrayProdutos[i].nomeProduto;
            td_preco.innerHTML = this.arrayProdutos[i].precoProduto;
            //td_del.innerHTML = this.arrayProdutos[i].del;

            let imagem = document.createElement('img');
            imagem.src = 'delete.svg';
            imagem.setAttribute("onclick", `produto.Deletar(${this.arrayProdutos[i].id})`);
            td_del.appendChild(imagem);
        }
        
    }
    Cancelar (){
        document.getElementById('pdnome').value = ''
        document.getElementById('pdpreco').value = ''
    }
    Deletar (id) {
        for (let i = 0; i < this.arrayProdutos.length; i++ ) {
            if(this.arrayProdutos[i].id == id) {
                this.arrayProdutos.splice(i, 1)
            }
        }
        this.Listar()
        if (this.arrayProdutos.length == 0){
            let tbody = document.querySelector(".tbody");
            tbody.innerHTML = '';
            let tr = tbody.insertRow();
            let td_id = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_preco = tr.insertCell();
            let td_del = tr.insertCell();
            td_id.innerHTML = 0;
            td_nome.innerHTML = 0;
            td_preco.innerHTML = 0;
            let imagem = document.createElement('img');
            imagem.src = "delete.svg"
            td_del.appendChild(imagem);
        }
        
    }
}
var produto = new Produto()
