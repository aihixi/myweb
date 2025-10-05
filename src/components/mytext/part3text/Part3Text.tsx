import Bookshelf from '../../bookshelf/BookShelf'

const Part3Text: React.FC = () => {
    return (
      <div>
        <h1 style={{
              textAlign: 'left', 
              marginLeft: '32px',
              backgroundClip: 'text',
          }}>Education
        </h1>
        <div style={{ lineHeight: '1.6', padding: '0 8px' }}>
          <p style={{ width: '90%', paddingLeft: '24px', marginBottom: '8px', fontSize: '2rem', fontWeight: 'bold', textAlign: 'left' }}>
              专业：计算机科学与技术
          </p>
          <div style={{ width: '90%', paddingLeft: '24px', marginBottom: '8px', fontSize: '2rem', textAlign: 'left' }}>
              {/* 2023年9月——至今 */}
          </div>
          <p style={{ width: '100%', paddingLeft: '24px', marginBottom: '8px', fontSize: '2rem', fontWeight: 'bold', textAlign: 'left' }}>
            已学习课程：
          </p>
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%', 

            paddingTop: '64px',
            marginBottom: '8px' 
          }}>
            <Bookshelf/>
          </div>
        </div>
      </div>
    )
};

export default Part3Text;