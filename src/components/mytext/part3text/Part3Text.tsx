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
          <p style={{ width: '90%', paddingLeft: '24px', marginBottom: '8px', fontSize: '2rem', fontWeight: 'bold', textAlign: 'left' }}>
              已学习课程：
          </p>
          <div style={{ width: '90%', paddingLeft: '24px', marginBottom: '8px', fontSize: '2rem', textAlign: 'left' }}>
              C语言，HTML基础开发实训，Python，数据库系统概论，数据结构，计算机组成原理，计算机网络，操作系统，算法设计与分析
          </div>
        </div>
      </div>
    )
};

export default Part3Text;