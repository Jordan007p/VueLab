import { ref } from 'vue';
import { createClient } from 'contentful';
import useListActions from './useListActions';

export default function useBlogs() {
    const blogs = ref([]);
    const isLoading = ref(false);
    const error = ref(null);
    const client = createClient({
        space: 'b78udlzv48wr',
        accessToken: 'sHk_xCW79ORDEc4Qj4PIg3Bjkyqo5OhGxZUOjdBg0Gs',
    });

    const fetchBlogs = async () => {
        isLoading.value = true;
        try {
            const response = await client.getEntries({ content_type: 'pageBlogPost' });

            // Build a map of asset URLs keyed by asset ID
            const assetMap = new Map();
            response.includes.Asset.forEach(asset => {
                assetMap.set(asset.sys.id, asset.fields.file.url);
            });

            blogs.value = response.items.map((item) => ({
                id: item.fields.slug,
                title: item.fields.title,
                description: item.fields.shortDescription,
                heroImage: item.fields.featuredImage
                    ? `https:${assetMap.get(item.fields.featuredImage.sys.id)}`
                    : '',
                publishDate: new Date(item.fields.publishedDate).toLocaleDateString(),
            }));
        } catch (err) {
            error.value = err;
        } finally {
            isLoading.value = false;
        }
    };

    fetchBlogs();
    const { addItem, deleteItem } = useListActions(blogs);
    return { blogs, isLoading, error, addItem, deleteItem };
}