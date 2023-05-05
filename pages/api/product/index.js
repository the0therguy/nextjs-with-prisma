import {v4 as uuidv4} from 'uuid';

export default function handler(req, res) {
    const my_data = [{
        id: 1,
        uuid: uuidv4(),
        title: 'The food',
        price: 150,
        cost: 80,
        image: 'url',
        branch: 'lounge',
        deleted: false,
        created_at: new Date(),
        updated_at: null
    }, {
        id: 3,
        uuid: uuidv4(),
        title: 'a lot of foods',
        price: 250,
        cost: 150,
        image: 'url',
        branch: 'lounge',
        deleted: false,
        created_at: new Date(),
        updated_at: null
    }, {
        id: 2,
        uuid: uuidv4(),
        title: 'The foods',
        price: 250,
        cost: 150,
        image: 'url',
        branch: 'lounge',
        deleted: false,
        created_at: new Date(),
        updated_at: null
    }]
    res.status(200).json({data: my_data})
}