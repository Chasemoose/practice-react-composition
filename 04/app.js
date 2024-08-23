import React from 'react';
import { createRoot } from 'react-dom/client';

import File from './File';
import List from './List';

class App extends React.Component {
    state = {
        filesList: [],
    }

    addFileToList = (file) => {
        this.setState({
            filesList: [...this.state.filesList, file]
        })
    }

    render() {
        return (
            <section>
                <File addFileToList={this.addFileToList} />
                <List items={this.state.fileList} />
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
