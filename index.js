class Produto {
    constructor () {
        this.id = 1;
        this.arrayProdutos= [];
    }
    Adicionar () {
        let produto = this.LerDados() 
        if (this.Validar(produto)== true){
            this.Salvar(produto)
        }
        this.Listar()
    }
    LerDados(){
        let produto = {}
        
        produto.id = this.id
        produto.nomeProduto = document.getElementById('pdnome').value
        produto.nomeProduto = document.getElementById('pdpreco').value

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
        let tbody = document.getElementById(tbody)
        tbody.innerText = ''
        
        for(let i = 0; i < this.arrayProdutos.lenght; i++ ) {

            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_preco = tr.insertCell();
            let td_del = tr.insertCell();

            this.id.innerText = this.arrayProdutos[i].id;
            this.nome.innerText = this.arrayProdutos[i].nomeProduto;
            this.preco.innerText = this.arrayProdutos[i].precoProduto;
            this.del.innerText = this.arrayProdutos[i].del;

            let imagem = document.createElement('img');
            imagem.src = 'delete.svg';
            td_del.appendChild(imagem)
        }
        
    }
    Cancelar (){
        document.getElementById('pdnome').value = ''
        document.getElementById('pdpreco').value = ''
    }
    Deletar (id) {
        let tbody = document.getElementById('tdody')
        for (i = 0; i < this.arrayProdutos.length; i++ ) {
            if(this.arrayProdutos[i].id == id) {
                this.arrayProdutos.splice(i, 1)
                tbody.deleteRow(i)
            }
        }
    }
}
var produto = new Produto()
let imagem = document.createElement('img')
            imagem.src = 'Img.Delete.png'
            imagem.setAttribute("onclick", "produto.Deletar("+this.arrayProdutos[i].id+")")
            td_del.appendChild(imagem)