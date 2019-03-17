import AdminForm from '../components/Admin/AdminForm';
import SignIn from '../components/Admin/SignIn';
import { connect } from 'react-redux';
import { deauthenticate } from '../store/actions/index';
import Button from '@material-ui/core/Button';
import Link from 'next/link';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px 20px',
    flexWrap: 'wrap'
  }
};

const Admin = ({ user, deauthenticate, collections }) => {
  return (
    <div>
      {user ? (
        <div>
          <div style={styles.header}>
            <p>Hello {user}!</p>
            <div>
              <Link href="/">
                <Button>Home</Button>
              </Link>
              <Button onClick={deauthenticate}>Logout</Button>
            </div>
          </div>
          <AdminForm collections={collections} />
        </div>
      ) : (
        <SignIn />
      )}
    </div>
  );
};

Admin.getInitialProps = ({ user }) => {
  return { user };
};

export default connect(
  null,
  { deauthenticate }
)(Admin);
