import data from '../../artigos.json'

function Home() {
    console.log(data)
    return (
        <>
        <input type="text" id="buscar" placeholder='Digite sua busca:'/>
            <div className='grid grid-cols-3 gap-4'>
        {data.map(filme=>(
            <div className='card bg-slate-400' key={filme.title}>
                <h1>{filme.title}</h1>
                <img src={filme.image} alt={filme.title}/>
                    <div className='tag'>
                        {filme.tags.map(tag=>(
                        <span key={tag} className='text-purple-900'>{tag}</span>
                        ))}
                    </div>
                    <div className='texto'>
                        {filme.text.map(texto=>(
                            <p key={texto}>{texto}</p>
                        ))}
                    </div>
                </div>
            ))
        }
        
</div>
        </>
     );
}

export default Home ;