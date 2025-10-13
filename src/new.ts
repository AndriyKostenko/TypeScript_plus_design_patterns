
// array
const someArray: string[] = ['dsd', 'dsd']

// tuples in typescript
const skills: readonly [number, string] = [1, "fdf"]

// same protected tuple using generics
const newSkills: ReadonlyArray<number> = [2,4,5,6]


// enums for fixed set of constants
enum StatusCodes {
    SUCCESS = 1,
    IN_PROGRESS = 2,
    FAILED = 3
}

enum QuestionStatus {
    PUBLISHED = 'published',
    DRAFT = 'draft',
    DELETED = 'deleted'
}


// parametrized function with return type
async function getFaqs( req: {
    topicId: number;
    status: QuestionStatus;
}) : Promise<{
    question: string;
    answer: string;
    tags: string[];
    likes: number;
    status?: QuestionStatus;
}[]> {
    const res = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(req)
    });

    const data = await res.json();
    return data;
}