import Link from 'next/link';
import renderHTML from 'react-render-html';
import { useState, useEffect } from 'react';
import { listSearch } from '../../actions/blog';
import SearchCard from '../../components/blog/SearchCard';

import { Form, FormGroup, FormControl, Grid, Row, Col, Button, Icon, Input, InputGroup } from 'rsuite';

const Search = () => {
    const [values, setValues] = useState({
        search: undefined,
        results: [],
        searched: false,
        message: ''
    });

    const { search, results, searched, message } = values;

    const searchSubmit = e => {
        e.preventDefault();
        listSearch({ search }).then(data => {
            setValues({ ...values, results: data, searched: true, message: `${data.length} blogs found` });
        });
    };

    const handleChange = e => {
        setValues({ ...values, search: e, searched: false, results: [] });
    };

    const searchedBlogs = (results = []) => {
        return (
            <div>
                {message && <Col xs={24}><h6 className="pb-4">{message}</h6></Col>}

                {results.map((blog, i) => {
                    return (
                        <Col xs={12} key={i}>
                            <SearchCard blog={blog} />
                        </Col>
                    );
                })}
            </div>
        );
    };

    const searchForm = () => (
       <Form onSubmit={searchSubmit} fluid layout="inline">
           <FormGroup style={{marginRight: 5}}>
               <FormControl placeholder="Search Posts..." onChange={handleChange} />
           </FormGroup>
           <Button type="submit" appearance="ghost">
                <Icon icon="search"  /> Search
            </Button>
       </Form>
    );

    return (
        <div className="container">
            <Grid fluid>
                <Row className="show-grid">
                    <Col xs={24}>
                        {searchForm()}
                    </Col>
                    {searched && <React.Fragment>{searchedBlogs(results)}</React.Fragment>}
                </Row>
            </Grid>
        </div>
    );
};

export default Search;
