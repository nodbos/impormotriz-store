import React from 'react';
import { withRouter } from 'react-router';
import ButtonSemantic from '../button-semantic/button-semantic.component';

const ButtonBack = ({ history }) => {
    return (
        <ButtonSemantic
            backButton
            secondColorCombination
            onClick={() => history.go(-1)}>
            Volver
        </ButtonSemantic>
    );
};

export default withRouter(ButtonBack);
