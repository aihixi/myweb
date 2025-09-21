const Part1Text: React.FC = () => {
    return (
      <div>
        <h1 style={{
              textAlign: 'left', 
              marginLeft: '32px',
            }}>Introduce</h1>
        <div style={{ fontSize: '20px', lineHeight: '1.6', padding: '0 32px 32px' }}>
          <p style={{ width: '90%', fontSize: '32px', fontWeight: 'bold', textAlign: 'left' }}>
            你好，我是一名大三本科生，一名热爱编程的学生。
          </p>
          <p style={{ width: '90%', marginBottom: '16px', fontSize: '32px', textAlign: 'left' }}>
            专注于前端开发领域，特别是在JavaScript、TypeScript和Node.js的应用方面有较多的学习和实践经验。
            通过学习这些技术，我掌握了前端开发的基本框架和库，如React和Vue3，同时也学习过一些后端开发的语言。
          </p>
        </div>
      </div>
    )
};

export default Part1Text;