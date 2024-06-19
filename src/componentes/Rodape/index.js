import './Rodape.css'

const Rodape = () => {
    return (
        <footer className="footer">
            <div className="redes">
                <a href="https://www.facebook.com/roberval.desousa.1" target="_blank">
                    <img src="/imagens/fb.png" alt="Ícone do facebook" />
                </a>
                <a href="#" >
                    <img src="/imagens/tw.png" alt="Ícone do tweeter" />
                </a>
                <a href="https://www.instagram.com/sousarobervalde/" target="_blank">
                    <img src="/imagens/ig.png" alt="Ícone do instagram" />
                </a>
            </div>
            <div>
                <img src="/imagens/logo.png" alt="logo da página" />    
            </div>
            <div className="desenvolvedor">
                <h3>Desenvolvido por Roberval de Sousa</h3>
            </div>
        </footer>
    )
}

export default Rodape