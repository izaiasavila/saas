import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MembersActions from '~/store/ducks/members';

import Button from '~/styles/components/Button';
import Modal from '~/components/Modal';

import { MemberList } from './styles';

const Members = ({ closeMembersModal }) => (
  <Modal size="big">
    <h1>Membros</h1>
    <form>
      <MemberList>
        <li>
          <strong>Diego Fernandes</strong>
        </li>
      </MemberList>
      <Button onClick={closeMembersModal} filled={false} color="gray">
        Cancelar
      </Button>
    </form>
  </Modal>
);

Members.propTypes = {
  closeMembersModal: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(MembersActions, dispatch);

export default connect(null, mapDispatchToProps)(Members);
