interface PoemApiResponse {
  title: string;
  author: string;
  lines: string[];
  category: string;
}

interface Poem {
  id: string;
  title: string;
  excerpt: string;
}

export const fetchPoems = async (count: number = 20): Promise<Poem[]> => {
  try {
    const response = await fetch(`https://poetrydb.org/poemcount/${count}`);
    if (!response.ok) {
      throw new Error("Failed to fetch poems");
    }
    const data: PoemApiResponse[] = await response.json();

    const mappedPoems: Poem[] = data.map((poem, index) => ({
      id: index.toString(),
      title: poem.title,
      excerpt: poem.lines[0],
    }));

    return mappedPoems;
  } catch (error) {
    console.error("Error fetching poems:", error);
    return [];
  }
};