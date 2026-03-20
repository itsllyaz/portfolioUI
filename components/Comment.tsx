import Image from 'next/image'
import { Comment as CommentType } from '@/lib/blog-data'

interface CommentProps {
  comment: CommentType
  isAuthor?: boolean
  nested?: boolean
}

export function Comment({ comment, isAuthor = false, nested = false }: CommentProps) {
  return (
    <div className={`flex gap-4 ${nested ? 'ml-8 md:ml-16' : ''}`}>
      <div className="w-12 h-12 bg-surface-container-highest rounded-full flex-shrink-0 overflow-hidden border border-black/10">
        <Image
          src={comment.avatar}
          alt={`${comment.author} avatar`}
          width={48}
          height={48}
          className="w-full h-full object-cover"
        />
      </div>

      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="font-bold font-headline text-sm">{comment.author}</span>
          {isAuthor && (
            <span className="bg-black text-white text-[8px] px-2 py-0.5 rounded-full uppercase font-bold tracking-tighter">
              Author
            </span>
          )}
          <span className="text-[10px] font-body text-on-surface-variant uppercase tracking-tighter">{comment.date}</span>
        </div>

        <p className="text-on-surface-variant text-sm font-body leading-relaxed max-w-2xl">{comment.content}</p>

        <button className="mt-3 text-[10px] font-bold uppercase tracking-widest text-primary hover:underline">
          Reply
        </button>

        {/* Nested replies */}
        {comment.replies && (
          <div className="space-y-10 mt-8">
            {comment.replies.map((reply) => (
              <Comment key={reply.id} comment={reply} nested={true} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
