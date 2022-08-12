import axios from 'axios';
import { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { getError } from '../utils';

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return { ...state, product: action.payload, loading: false };
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

function EditScreen() {
    const params = useParams();
    const { slug } = params;
    const [{ loading, error, product }, dispatch] = useReducer(reducer, {
        product: [],
        loading: true,
        error: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_REQUEST' });
            try {
                const result = await axios.get(`/api/products/slug/${slug}`);
                dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
            } catch (err) {
                dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
            }
        };
        fetchData();
    }, [slug]);

    return loading ? (
        <LoadingBox />
    ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
    ) : (
        <Form>
            <Helmet>
                <title>{product.name}</title>
            </Helmet>
            <Form.Group className="mb-3">
                <Form.Label>Nome do produto</Form.Label>
                <Form.Control type="text" placeholder="Nome" value={product.name} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Avaliação do produto</Form.Label>
                <Form.Control type="text" placeholder="Avaliação" value={product.rating} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Preço do produto</Form.Label>
                <Form.Control type="text" placeholder="Preco" value={product.price} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Descrição do produto</Form.Label>
                <Form.Control type="text" placeholder="Preco" value={product.description} />
            </Form.Group>
            <Button variant="primary" type="submit" >
                Editar produto
            </Button>
        </Form>
    );
}

export default EditScreen;