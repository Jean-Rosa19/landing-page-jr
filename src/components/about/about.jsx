
import { useNavigate } from 'react-router-dom'
import '../about/about.css'
import { FaGuitar } from 'react-icons/fa'

export function About() {

  const navigate = useNavigate()
  const redirectToHome =() =>{
    navigate('/')
}

  return (
    <>
      <div className='titulo'>
        <h2>Saudações, sou Jean Rosa</h2>
        <button className='return'>
          <FaGuitar className='guitar' size={25} onClick={redirectToHome}/>
        </button>
      </div>

      <div className='sobre'>

        <p>Graduado em Licenciatura em Música com Habilitação em Violão pela UNINCOR. Com experiência de mais de 12 anos como professor de violão, tive a oportunidade de aprofundar meu conhecimento em diversos segmentos do violão instrumental, e atuar de forma abrangente em suas múltiplas áreas.</p>
        <p>Minha jornada inclui a realização de recitais, masterclasses, colaborações em duos, trios e participação em orquestras de violão. Meu comprometimento também se estendeu para a sala de aula, onde ministrei aulas em diversos contextos. Além disso, fui aluno da prestigiada Escola Municipal de Música de São Paulo, onde solidifiquei minha formação.</p>
        <p>Meu trabalho atualmente se concentra em aulas particulares de maneira presencial ou online, permitindo-me personalizar o aprendizado de acordo com as necessidades individuais dos meus alunos. Minha abordagem é enraizada na dedicação à arte do violão e na busca constante pela excelência musical.</p>
        <p><a href="https://jeanrosa-aulas.vercel.app/" target='blank'>Conheça meu trabalho Clicando aqui!</a></p>
      </div>
    </>

  )
}