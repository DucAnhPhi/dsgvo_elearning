import React, { Component } from 'react';
import TitleComp from '../../components/title/title';
import SubTitleComp from '../../components/subtitle/subtitle';
import ButtonComp from '../../components/button/button';
import { connect } from 'react-redux';
import { setAreasAction } from '../../store/user';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AREA = 'ip';

class FrageIPView extends Component {
    render() {
        const { setAreasAction, areas } = this.props;
        return (
            <div style={styles.fragebogen}>
                <TitleComp>Fragebogen</TitleComp>
                    <SubTitleComp>4. Haben Sie Zugriff auf IP-Adressen?</SubTitleComp>
                    <div style={{display: 'flex', justifyContent: 'center', marginTop: '40px'}}>
                        <Link
                          to={'/frageEmail'}
                          onClick={() => setAreasAction([...areas, AREA])
                        }>
                            <ButtonComp>Ja</ButtonComp>
                        </Link>
                        <Link to={'/frageEmail'} style={{marginLeft: '20px'}}>
                            <ButtonComp>Nein</ButtonComp>
                        </Link>
                    </div>
            </div>
        )
    }
}

FrageIPView.propTypes = {
    setAreasAction: PropTypes.func,
    areas: PropTypes.array
};

const styles = {
    fragebogen: {
        margin: '60px auto 0 auto',
        width: '500px',
        textAlign: 'center'
    }
};

const mapStateToProps = state => ({
    areas: state.user.areas
});

const mapDispatchToProps = dispatch => bindActionCreators({ setAreasAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FrageIPView);