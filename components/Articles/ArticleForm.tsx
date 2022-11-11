import { Timestamp } from "firebase/firestore";
import { useRouter } from "next/router";
import React, { useRef, Dispatch, SetStateAction } from "react";
import { MdInfo } from "react-icons/md";

interface Props {
  label: string;
  article: any;
  setArticle: Dispatch<SetStateAction<any>>;
  submitHandler: any;
}

const ArticleForm = ({ label, submitHandler, article, setArticle }: Props) => {
  const articleForm = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    const option = e.target.name;
    if (option === "Save") {
      submitHandler({
        ...article,
        public: false,
        created: Timestamp.now(),
      });
      articleForm && articleForm?.current?.reset();
      setArticle({});
      return;
    } else if (option === "Edit") {
      submitHandler(article.id, { ...article, lastEdited: Timestamp.now() });
      router.back();
    } else {
      submitHandler({
        ...article,
        public: true,
        created: Timestamp.now(),
        posted: Timestamp.now(),
      });
      articleForm && articleForm?.current?.reset();
      setArticle({});
      return;
    }
  };

  const updateHandler = (field: string, value: string) => {
    setArticle({ ...article, [field]: value });
  };

  return (
    <form className="h-full flex justify-between" ref={articleForm}>
      <div className="flex flex-col p-4 justify-center items-center">
        <h2 className="text-2xl font-bold w-full text-left">{label}</h2>
        <div className="flex flex-col  justify-around p-2 w-1/2">
          <input
            name="Title"
            className="p-1 border-b-2 border-slate-200 outline-none text-3xl my-4 font-black uppercase"
            aria-label="Title"
            placeholder="Main Title"
            onChange={(e) => updateHandler("title", e.target.value)}
            required
            value={article?.title}
          />
          <input
            name="Headline"
            className="p-1 border-b-2 border-slate-200 outline-none text-2xl my-4 font-black capitalize"
            aria-label="Headline"
            placeholder="Headline"
            onChange={(e) => updateHandler("headline", e.target.value)}
            required
            value={article?.headline}
          />
        </div>
        <div className=" flex items-center flex-col mb-4 sm:w-4/5 w-full">
          <h3 className="text-md text-whiteX font-bold italic text-left w-4/5">
            Section 1
          </h3>
          <textarea
            name="Content1"
            aria-label="Article Content"
            placeholder="Once upon a time in the grasslands, there was Impala..."
            className="p-4 border-2 border-slate-200 tracking-wider leading-8 outline-none sm:w-4/5 w-full h-56 rounded-md shadow-md"
            onChange={(e) => updateHandler("content_1", e.target.value)}
            value={article?.content_1}
          />

          {article?.content_1?.length && (
            <span className="flex justify-between text-xs sm:w-4/5 w-full mt-2">
              <strong
                style={
                  article?.content_1?.split(" ").length > 250
                    ? { color: "red" }
                    : { color: "green" }
                }
              >
                Word Count: <i>{article?.content_1?.split(" ").length}</i>
              </strong>
              <i>{article?.content_1?.split(" ").length / 100} mins read.</i>
            </span>
          )}
        </div>
        <div className=" flex items-center flex-col mt-8 sm:w-4/5 w-full">
          <h3 className="text-md text-whiteX font-bold italic text-left w-4/5">
            Section 2
          </h3>
          <textarea
            name="Content2"
            aria-label="Article Content"
            placeholder="and the story continues..."
            id="fullWidth"
            className="p-4 border-2 border-slate-200 tracking-wider leading-8 outline-none sm:w-4/5 w-full h-56 rounded-md shadow-md"
            onChange={(e) => updateHandler("content_2", e.target.value)}
            value={article?.content_2}
          />
          {article?.content_2?.split(" ").length > 0 && (
            <span className="flex justify-between text-xs sm:w-4/5 w-full mt-2">
              <strong
                style={
                  article?.content_2?.split(" ").length > 150
                    ? { color: "red" }
                    : { color: "green" }
                }
              >
                Word Count: <i>{article?.content_2?.split(" ").length}</i>
              </strong>
              <i>{article?.content_2?.split(" ").length / 100} mins read.</i>
            </span>
          )}
        </div>
        <div className="flex justify-between sm:w-1/2 w-full my-5">
          <input
            id="standard-multiline-flexible"
            aria-label="Type"
            name="Type"
            placeholder="Article, Feature, Update, News"
            className="p-1 border-b-2 border-slate-200 outline-none w-1/3 capitalize "
            onChange={(e) => updateHandler("type", e.target.value)}
            value={article?.type}
          />

          <input
            id="standard-multiline-flexible"
            aria-label="Tags: Seperate with commas"
            name="Tags"
            placeholder="Kenya Cup, Ess, Nationwide, e.t.c."
            className="p-1 border-b-2 border-slate-200 outline-none w-1/2"
            onChange={(e) => updateHandler("tags", e.target.value)}
            value={article?.tags}
          />
        </div>

        <div className="flex items-center justify-between w-full mt-8 sm:w-2/3">
          <div className="flex flex-col">
            <label htmlFor="contained-button-file">
              <input
                type="file"
                name="image_1"
                accept="image/*"
                onChange={(e) => updateHandler("image_1", e.target.value)}
              />
            </label>
            <input
              className="p-1 border-b-2 border-slate-200 outline-none mt-4 "
              id="standard-multiline-flexible"
              placeholder="Caption about the image - 1"
              aria-label="Caption One"
              name="Caption1"
              onChange={(e) => updateHandler("caption_1", e.target.value)}
              required
              value={article?.caption_1}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="contained-button-file-2">
              <input
                type="file"
                name="image_2"
                accept="image/*"
                id="contained-button-file-2"
                onChange={(e) => updateHandler("image_2", e.target.value)}
              />
            </label>
            <input
              className="p-1 border-b-2 border-slate-200 outline-none mt-4 "
              placeholder="Caption about the image - 2"
              aria-label="Caption Two"
              name="Caption2"
              onChange={(e) => updateHandler("caption_2", e.target.value)}
              required
              value={article?.caption_2}
            />
          </div>
        </div>

        {/* Submit Buttons */}
        <div className="h-20 w-2/3 flex justify-end items-center">
          {label === "Edit Article" ? (
            <>
              <button
                className="bg-primaryRed border-2 w-28 rounded-md text-white  mx-10"
                name="Cancel"
                onClick={() => router.back()}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 border-2 w-28 rounded-md text-white"
                name="Edit"
                onClick={handleSubmit}
              >
                Edit
              </button>
            </>
          ) : (
            <>
              <button
                className="border-blackX border-2 w-28 rounded-md text-blackX mx-10"
                name="Save"
                onClick={handleSubmit}
              >
                Save
              </button>
              <button
                className="bg-green-500 border-2 w-28 rounded-md text-white"
                name="Post"
                onClick={handleSubmit}
              >
                Upload
              </button>
            </>
          )}
        </div>

        <div className="flex items-center sm:w-2/3 w-4/5 justify-between bg-blue-200 text-blackX rounded-md p-4">
          <MdInfo className="text-4xl text-white w-16 mr-5" />
          <p className="font-thin text-sm tracking-widest">
            All information and resources provided on
            <a href="#" className="text-primaryRed">
              {" "}
              impalarugby.com
            </a>{" "}
            are based on your opinions as the author (unless otherwise stated).
            All information is intended to grow the club reputation and to grow
            the impala brand.
          </p>
        </div>
      </div>
    </form>
  );
};

export default ArticleForm;
