
import { FaPlay } from "react-icons/fa"
import '../components/navbar.css'
import { Link, useNavigate } from "react-router-dom";
import jean from '../assets/jeanrosa.png'
import logo from '../assets/logojr.png'




export function Navbar() {

    function openWhatsAppChat() {
        const phoneNumber = '+5535999450991';
        const message = 'Olá, gostaria de agendar uma aula!';
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`, '_blank');
      }

    const navigate = useNavigate()
    const redirectToAbout = () => {
        navigate('/about')
    }


    return (
        <>

            <header>
                <img className="logo" src={logo} />
                <nav>
                    <Link to="/">Início</Link>
                    <a href="/about">Sobre </a>

                    <a className="contact" onClick={openWhatsAppChat} >Contato</a>
                   

                </nav>
            </header>

            <section>
                <div className="section-text">
                    <h1>Estude Violão de Maneira Descomplicada!!</h1>
                    <p>
                        Explore o vasto mundo da música por meio das minhas aulas especializadas. De Música Brasileira a interpretação de partituras, mergulhe em uma jornada musical única. Desenvolva sua percepção harmônica, domine o repertório clássico e aprimore suas habilidades de FingerStyle. Aprenda a improvisar e desbloqueie seu potencial criativo. Descubra o prazer de fazer música de maneira autêntica e expressiva. Junte-se a mim nesta emocionante viagem musical e eleve seu talento a novos patamares.

                    </p>

                    <div>
                        <button className="play">

                            <i className="fa-play"> <FaPlay className="faplay" /></i>

                            <a className="linkyoutube" href="https://www.youtube.com/channel/UCessnc_3DyPvS1PuM8AhOrA" target="blank" >Assistir Agora</a>
                        </button>

                        <button onClick={redirectToAbout}>
                            Mais Informações
                        </button>
                    </div>
                </div>

                <div className="section-img">
                    <img className="jean"
                        src={jean}
                    />
                </div>

            </section>
        </>
    )
    }