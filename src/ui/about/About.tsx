import './about.css'

export function About() {
  return (
    <div className="about-wrap flex-col">
      <h1 className="centered title">Sobre o projeto</h1>
      <p className='bold'>Antes de tudo, gostaríamos de lembrar que não somos detentores dos direitos autorais de Ordem Paranormal, todos os créditos vão para Rafael Lange (Cellbit) criador de Ordem Paranormal e detentor dos direitos de uso criativo.</p>
      <p>Ordem Paranormal - A Série é um projeto, sem fins lucrativos, criado por fãs da comunidade e que vai adaptar a primeira temporada de Ordem Paranormal O RPG para uma série em live action.</p>
      <p>A nossa equipe é formada por profissionais voluntários de diversas áreas que estão trabalhando juntos para que a comunidade tenha uma outra experiência com as telinhas.</p>
      <p>Mind Hunter (2017), Invocação do Mal (2013), Supernatural (2005), A Maldição da Residência Hill (2018) todas serviram de inspiração por suas ligações com tramas paranormais e mistérios urbanos ou por suas direções artísticas incomparáveis.</p>
      <p>Como Desventuras em Série (2017) e The Last of Us (2023) valorizamos a fidelidade.</p>
      <p>Mas afinal...</p>
      <h5 className="subtitle centered">O que é Ordem Paranormal?</h5>
      <p>Ordem Paranormal é um RPG de mesa criado e mestrado por Rafael Lange (Cellbit) na plataforma de streaming, TwitchTV (29 de fevereiro de 2020). Desde então, Ordem Paranormal ganhou fama e cresceu, se tornando o RPG mais assistido do Brasil e fazendo com que esse jogo entre amigos pudesse expandir em um universo amplo e cheio de mistérios a serem resolvidos.</p>
      <p>Com 5 temporadas já lançadas, além de um livro de regras e um jogo que arrecadou mais de 4 milhões de reais, Ordem Paranormal detém a marca de mais de 1 milhão de visualizações em seus episódios no YouTube e mais de 100 mil telespectadores simultâneos durante uma Live.</p>
      <h5 className="subtitle centered">A história</h5>
      <p>Após um incêndio na Escola Nostradamus, um bombeiro acabou sendo morto de formas misteriosas. E cabe a Ordo Realitas, investigar e garantir que não exista nada de inabitual neste caso.</p>
      <p>A Ordem convoca para essa missão três agentes, Elizabeth Webber, Thiago Fritz e Daniel Hartmann. Os três, com o ex professor Alexsander Kothe, precisam resolver os mistérios e terminar a missão.</p>
      <h5 className="subtitle centered">Veja nosso teaser</h5>
      <div className="videoplayer">
        <iframe width="100%" height="480" src="https://www.youtube.com/embed/QgZjiV_mKbo" title="Teaser - Ordem Paranormal A Série (Feita por fãs)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
      <p className='centered bold'>A realidade como conhecemos está em perigo e somente os agentes da Ordem Paranormal podem nos ajudar.</p>
    </div>
  );
}