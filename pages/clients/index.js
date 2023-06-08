import Link from 'next/link'

const ClientsPage = () => {

  const clients = [
    {id:'blis',name:'Bliss'},
    {id:'stef',name:'Stefane'},
    {id:'an',name:'Annabel'},
  ]

  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
       {clients.map(client => <li key={client.id}><Link href={{
        pathname: 'clients/[id]',
        query: {id: client.id},
       }}>{client.name}</Link></li>)}
      </ul>
    </div>
  );
};

export default ClientsPage;
