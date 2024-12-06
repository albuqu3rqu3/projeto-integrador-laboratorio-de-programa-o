// Dados de login (simulados)
const users = [
  { username: 'admin', password: '1234' },
  { username: 'user', password: 'senha' }
];

// Lista de itens no estoque
let inventory = [];

// Função para realizar login
function login() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  // Verifica se o usuário existe
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    alert('Login bem-sucedido!');
    document.getElementById('loginScreen').classList.add('hidden');
    document.getElementById('inventorySystem').classList.remove('hidden');
  } else {
    alert('Usuário ou senha inválidos!');
  }
}

// Função para realizar logout
function logout() {
  alert('Você saiu do sistema.');
  document.getElementById('inventorySystem').classList.add('hidden');
  document.getElementById('loginScreen').classList.remove('hidden');
}

// Função para adicionar um item
function addItem() {
  const itemName = document.getElementById('itemName').value.trim();
  const itemQuantity = parseInt(document.getElementById('itemQuantity').value, 10);

  if (!itemName || itemQuantity <= 0) {
    alert('Por favor, insira um nome válido e uma quantidade maior que zero.');
    return;
  }

  inventory.push({ name: itemName, quantity: itemQuantity });
  document.getElementById('itemName').value = '';
  document.getElementById('itemQuantity').value = '';
  updateInventoryList();
}

// Função para atualizar a lista de itens
function updateInventoryList() {
  const inventoryList = document.getElementById('inventoryList');
  inventoryList.innerHTML = '';

  inventory.forEach((item, index) => {
    const li = document.createElement('li');

    const itemText = document.createElement('span');
    itemText.textContent = `${item.name} - Quantidade: ${item.quantity}`;
    itemText.className = 'item-text';

    const editButton = document.createElement('button');
    editButton.textContent = 'Editar';
    editButton.className = 'edit';
    editButton.onclick = () => editItem(index);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Apagar';
    removeButton.className = 'remove';
    removeButton.onclick = () => removeItem(index);

    li.appendChild(itemText);
    li.appendChild(editButton);
    li.appendChild(removeButton);
    inventoryList.appendChild(li);
  });
}

// Função para editar um item
function editItem(index) {
  const item = inventory[index];
  const newName = prompt('Digite o novo nome do item:', item.name);
  const newQuantity = parseInt(prompt('Digite a nova quantidade:', item.quantity), 10);

  if (newName && newQuantity > 0) {
    inventory[index] = { name: newName, quantity: newQuantity };
    updateInventoryList();
  } else {
    alert('Nome ou quantidade inválidos.');
  }
}

// Função para apagar um item
function removeItem(index) {
  inventory.splice(index, 1);
  updateInventoryList();
}


