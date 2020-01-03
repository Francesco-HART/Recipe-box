import React from 'react'

const Header = ({pseudo} ) => {
    //Test type pseudo to string index 1
    const formatPseudo = pseudo =>/[aeiouy]/i.test(pseudo[0]) ? 'd\''+pseudo : 'de '+pseudo
    return(
            <header>
                La recette de la boite {formatPseudo(pseudo)}
            </header>
    )
}
export default Header